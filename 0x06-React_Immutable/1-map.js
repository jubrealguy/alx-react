import { Map } from 'immutable';
import getImmutableObject from './0-fromjs';

export default function getImmutableObject(object) {
  Map(object)
}
