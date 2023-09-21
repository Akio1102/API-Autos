export function sendSuccessResponse(res, data, statusCode = 200) {
  if (data.status === 404) {
    return sendErrorResponse(res, data.msg, data.status);
  }

  res.status(statusCode).json(data);
}

export function sendErrorResponse(res, err, statusCode = 500) {
  res.status(statusCode).send({ error: "Error en el Server", message: err });
}
