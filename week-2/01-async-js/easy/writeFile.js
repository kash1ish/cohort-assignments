const fs = require('fs');
const filePath = "C:\\Users\\Kashish\\OneDrive\\Desktop\\cohort-assignments\\week-2\\01-async-js\\easy\\file.txt";

function writeToFile(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

async function main() {
    try {
        await writeToFile(filePath, 'Hello kashi');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
