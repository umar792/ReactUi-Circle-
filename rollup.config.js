
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";


export default defineConfig({
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "es",
        name : "all-ui"
    },
    external : ["react","react-dom","react-icons"],
    plugins: [
         typescript({
            tsconfig: "tsconfig.json",
         }),
         postcss(),
    ]
    
})