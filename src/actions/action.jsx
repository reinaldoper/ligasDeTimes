export const NAMEINPUT = 'NAMEINPUT';
export const NEWNAME = 'NEWNAME';

export const requiretName = (payload) => ({ type: NAMEINPUT, payload });
export const newName = (payload) => ({ type: NEWNAME, payload });

