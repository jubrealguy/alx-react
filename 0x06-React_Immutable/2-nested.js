import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedVal = fromJS(object);
  return mappedVal.getIn(array, undefined);
}
