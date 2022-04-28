export const successResponse = (res, msg) => {
  return res.status(200).json({ statis: 1, message: msg });
};

export const successResponseWithData = (res, msg, data) => {
  return res.status(200).json({ status: 1, message: msg, data });
};

export const errorResponse = (res, msg) => {
  return res.status(500).json({ status: 0, message: msg });
};

export const notFoundResponse = (res, msg) => {
  return res.status(404).json({ status: 0, message: msg });
};

export const validationErrorWithData = (res, msg, data) => {
  return res.status(400).json({ status: 0, message: msg, data });
};

export const unauthorizedResponse = (res, msg) => {
  return res.status(401).json({ status: 0, message: msg });
};
