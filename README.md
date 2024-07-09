# textlint-rule-no-bold-paragraph [![Actions Status: test](https://github.com/aborazmeh/textlint-rule-no-bold-paragraph/workflows/test/badge.svg)](https://github.com/aborazmeh/textlint-rule-no-bold-paragraph/actions?query=workflow%3A"test") [![textlint rule](https://img.shields.io/badge/textlint-blue.svg)](https://textlint.github.io/)

Sometimes fully-bolded paragraphs used as headers, this rule finds these paragraphs.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-bold-paragraph

## Example

    # Book
    
    **First Chapter**
    
    Content of the first chapter
    
    __Second Chapter__
    
    Content of the first chapter
    
    ## Third Chapter

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "no-bold-paragraph": true
    }
}
```

Via CLI

```
textlint --rule no-bold-paragraph README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © aborazmeh
