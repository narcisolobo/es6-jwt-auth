class DatabaseError extends Error {
  constructor(err, message) {
    super(message);
    this.errors = err.errors;
  }
}

export default DatabaseError;
