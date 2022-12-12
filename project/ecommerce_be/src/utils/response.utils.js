const successResponse = (res, message, data, statusCode = 200) => {
  return res.status(statusCode).json({
    message,
    data,
  });
};

const errorResponse = (res, message, error, statusCode = 400) => {
  return res.status(statusCode).json({
    message,
    error,
  });
};

module.exports = {
  errorResponse,
  successResponse,
};
