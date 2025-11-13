const fs=require("fs");const p="analytics/schema/swb-v1.md";if(!fs.existsSync(p)){console.error("missing schema");process.exit(1);}else{console.log("schema ok");}
