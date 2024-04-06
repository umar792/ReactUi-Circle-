
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "es",
        name : "all-ui"
    },
    external : ["react","react-dom"],
    plugins: [
         typescript({
            tsconfig: "tsconfig.json",
         })
    ]
    
})