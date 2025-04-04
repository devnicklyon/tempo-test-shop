import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: number | string;
  title: string;
  price: number;
  image: string;
  description?: string;
}

const ProductCard = ({
  id = 1,
  title = "Product Title",
  price = 99.99,
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  description = "A great product with amazing features.",
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-white">
        <div className="relative pt-[100%] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="flex-grow p-4">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-2">
            {description}
          </p>
          <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Link to={`/product/${id}`} className="w-full">
            <Button className="w-full" variant="default">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
