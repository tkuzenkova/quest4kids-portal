"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

type MotionProps = {
	children: React.ReactNode;
	animation: Variants;
	whileHover?: string;
};

const Motion = ({ children, animation, whileHover }: MotionProps) => {
	return (
		<motion.div variants={animation} whileHover={whileHover}>
			{children}
		</motion.div>
	);
};

export default Motion;
