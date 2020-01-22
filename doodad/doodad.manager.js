const doodadOne = {
  id: "asf1231FASDF324",
  name: "doodad One",
  type: "Eletric Doodad",
  description: "Not your father's doodad",
  used: true,
  age: 11
};

const doodadTwo = {
  id: "ffsfdf7987",
  name: "doodad Two",
  type: "Spiked Doodad",
  description: "A doodad you can't fit in your pocket",
  used: false,
  age: 23
};

const doodadThree = {
  id: "aaawerewrewr",
  name: "doodad Three",
  type: "Slimy Doodad",
  description: "You don't know where this doodad has been",
  used: false,
  age: 77
};

function getAllDoodads() {
  return new Promise((resolve, reject) => {
    const doodads = {
      doodads: [doodadOne, doodadTwo, doodadThree]
    };
    resolve(doodads);
  });
}

function getDoodadById(id) {
  return new Promise((resolve, reject) => {
    const doodadRequested = doodadOne;
    doodadRequested.id = id;
    resolve(doodadRequested);
  });
}

function addDoodad(doodad) {
  return new Promise((resolve, reject) => {
    const errors = checkForDoodadCreateErrors(doodad);
    if (errors.length > 0) {
      reject({
        errors: errors
      });
    }
    else {
      doodad.id = "asdfwefaweftr879";
      resolve(doodad);
    }
  });
}

function editDoodad(doodad) {
  return new Promise((resolve, reject) => {
    const errors = checkForDoodadEditErrors(doodad);
    if (errors.length > 0) {
      reject({
        errors: errors
      });
    }
    else {
      resolve(doodad);
    }
  });
}

function deleteOneDoodad(id) {
  return new Promise((resolve, reject) => {
    resolve({
      message: `Doodad with id ${id} deleted or never existed`
    });
  });
}

module.exports = {
  getAllDoodads,
  getDoodadById,
  addDoodad,
  editDoodad,
  deleteOneDoodad
}

const checkForDoodadCreateErrors = ((doodad) => {
  const errors = checkForDoodadErrors(doodad);
  if (doodad.id) {
    errors.push({ text: 'New doodad cannot have an id.' });
  }
  return errors;
});

const checkForDoodadEditErrors = ((doodad) => {
  const errors = checkForDoodadErrors(doodad);
  if (!doodad.id) {
    errors.push({ text: 'Editing doodad must have an id.' });
  }
  return errors;
});

const checkForDoodadErrors = ((doodad) => {
  let errors = [];
  if (!doodad.name) {
    errors.push({ text: 'Please add a name' });
  }
  if (!doodad.type) {
    errors.push({ text: 'Please add a type' });
  }
  if (!doodad.description) {
    errors.push({ text: 'Please add a description' });
  }
  if (!doodad.used || doodad.used !== true && doodad.used !== false) {
    errors.push({ text: 'Please add the used attribute' });
  }
  return errors;
});
