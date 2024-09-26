import {schema, normalize} from 'normalizr';

const course = new schema.Entity('courses');

export const coursesNormalizer = (data) => normalize(data, [course]);