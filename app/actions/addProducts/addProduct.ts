  'use server';
  import { PrismaClient } from "@prisma/client";
  import { NextApiRequest, NextApiResponse } from 'next';

  const prisma = new PrismaClient();

  export const addProduct = async (name:string, price:string) => {
    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          price,
        },
      });

      return newProduct; // Return the newly created product
    } catch (error) {
      throw error;
    }
  };


  //update 
  export const updateProduct = async (productId:number, updatedName:string, updatedPrice:string) => {
      try {
        // Find the product by ID
        const product = await prisma.product.findUnique({
          where: {
            id: productId,
          },
        });
    
        if (!product) {
          throw new Error(`Product with ID ${productId} not found.`);
        }
    
        // Update the product's name and price
        const updatedProduct = await prisma.product.update({
          where: {
            id: productId,
          },
          data: {
            name: updatedName,
            price: updatedPrice,
          },
        });
    
        return updatedProduct;
      } catch (error) {
        throw error;
      }
    };

    //list 
    export const getAllProducts = async () => {
      try {
        const products = await prisma.product.findMany();
        return products;
      } catch (error) {
        throw error;
      }
    };


    //delete 
    export const deleteProduct= async (req: NextApiRequest, res: NextApiResponse) => {
      if (req.method === 'DELETE') {
        const { id } = req.query;
    
        try {
          // Delete the product by ID using Prisma
          await prisma.product.delete({
            where: {
              id: parseInt(id as string, 10), // Parse the id as a string and convert to number
            },
          });
    
          res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
          res.status(500).json({ error: 'Error deleting product' });
        }
      } else {
        res.status(405).end(); // Method not allowed
      }
    };