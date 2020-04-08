exports.handler = async (event) => {
  try {
    console.log(`events - ${JSON.stringify(event)}`)
    return {
        statusCode: 200,
        body: JSON.stringify('processed successfully')
    }
  } catch (error) {
      throw new Error(JSON.stringify(error));
  }
}