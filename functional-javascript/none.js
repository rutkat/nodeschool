function repeat(fn, int) {
  if (!fn || !int) return

  while (int > 0) {
    fn()
    int--
  }
}

module.exports = repeat
