import { ProductValidation } from "@/lib/validations";
import {SVGProps} from "react";
import { z } from "zod";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Product = z.infer <typeof  ProductValidation>