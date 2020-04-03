import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json'

export default {
	input: 'src/index.ts',
	plugins: [
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true
		}),
		commonjs(),
	],
	output: [{
		file: pkg.main,
		format: 'umd',
		name: 'internationalSsnValidator',
		plugins: [
			terser()
		]
	}, {
		file: pkg.module,
		format: 'es',
		plugins: [
			terser()
		]
	}],
	external: ['ahv13-validator', 'ssn-validator']
};
