interface TypeUser {
  getUser: () => void;
}

class Teacher implements TypeUser {
  getUser() {
    console.log('teacher');
  }
}

class Student implements TypeUser {
  getUser() {
    console.log('student')
  }
}


class Factory {
  static factoryMethod(type) {
    switch (type) {
      case 'teacher':
        return new Teacher();
      case 'student':
        return new Student();
    }
  }
}

Factory.factoryMethod('student').getUser();

