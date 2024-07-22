function printerError(s) {
    const errors = s.match(/[^a-m]/gi)
   return errors ? `${errors.length}/${s.length}` : `0/${s.length}`
}