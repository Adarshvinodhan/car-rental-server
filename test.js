import jwt from 'jsonwebtoken';

const res = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OGM3YjViMThmZjU0ZjM3NTMyYzNkNSIsInVzZXJuYW1lIjoiQWRhcnNoIFZpbm9kaGFuIiwiZW1haWwiOiJhZGFyc2h2aW5vZGhhbkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTczNzI4NzA0NywiZXhwIjoxNzM3MjkwNjQ3fQ.UFC0QSfPiRnCPU4YOXUnIBdkUZu0ZJOt0mDF5VQVRR4');

console.log(res);