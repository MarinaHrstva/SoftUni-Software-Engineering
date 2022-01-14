function extractFile(path) {
    let indexOfExt = path.lastIndexOf('.');
    let fileExt = path.substring(indexOfExt + 1);
    let indexOfFileName = path.lastIndexOf('\\');
    let fileName = path.substring(indexOfFileName + 1, indexOfExt);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')