import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: ["This is a **text** for bold paragraphs"],
    invalid: [
        {
            text: `
# Book

**First Chapter**

This is the first chapter of the book

__Second Chapter__

This is the second chapter of the book

## Third Chapter

This is the third chapter of the book
        `,
            errors: [
                {
                    line: 4,
                    column: 1
                },
                {
                    line: 8,
                    column: 1
                }
            ]
        }
    ]
});
