export default function accessImmutableObject(object, array) {
  const value = getIn(object, array);
  return value;
}
