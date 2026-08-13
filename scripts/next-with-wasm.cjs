const { spawn } = require("node:child_process");
const path = require("node:path");

const command = process.argv[2] || "dev";
const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");
const wasmDir = path.join(__dirname, "..", "node_modules", "@next", "swc-wasm-nodejs");

const child = spawn(process.execPath, [nextBin, command, ...process.argv.slice(3)], {
  stdio: "inherit",
  env: { ...process.env, NEXT_TEST_WASM_DIR: wasmDir },
});
child.on("exit", (code) => process.exit(code ?? 1));
