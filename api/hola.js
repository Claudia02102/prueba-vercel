module.exports = (req, res) => {
  res.status(200).json({ mensaje: 'Hola desde una función serverless', hora: new Date().toISOString() });
};
