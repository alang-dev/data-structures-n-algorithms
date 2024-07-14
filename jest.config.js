/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.jsx?$': 'babel-jest'
	},
	moduleFileExtensions: ['js'],
	collectCoverageFrom: [            // Specify files/globs to collect coverage from
		"src/**/*.{js,jsx,ts,tsx}",         // Include all JS, JSX, TS, and TSX files
		"!**/node_modules/**",           // Exclude node_modules
		"!**/vendor/**"                 // Exclude other folders as needed
	],
	coverageReporters: ["text", "text-summary"],
};
