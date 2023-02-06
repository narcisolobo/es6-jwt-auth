class DatabaseError extends Error {
  constructor(err) {
    super(err);
    this.errors = err.errors;
  }
}

export default DatabaseError;
