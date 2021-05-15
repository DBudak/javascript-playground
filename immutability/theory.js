/*
  Generally speaking immutable object is the one whaere you can't set any fields
  In JS this can be achieved via setting writeable:false for all feild descriptors or deep freezing and sealing an object

  Value Object:
    immutable upon creating
    has fields to describe identity and comparison
    has no global identity: no way to fetch instance by id
    closed to modification
    closed to extension
    defines its own equality
    overrides toString and valueOf: JS uses these for type coersion so you need to add handlers to your VO to transform into simple type or prevent coersion
  
  details about example:
    Object.create(null) prevents auto inheritance from Object.prototype
    valueOf is auto invoked when object is expected to behave as privitive (ie in + operation)
    Object.freeze prevents from changing any existing attributes
    Object.seal prevents from extending
*/