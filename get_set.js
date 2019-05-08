export class Todo{
    constructor(id,name,task){
        this.id = id;
        this.name = name;
        this.task = task;
    }
     getId()
      {
		return this.id;
	}
      setId( id) 
     {
		this.id = id;
	}

     getName() 
    {
		return this.name;
	}

    setName(name)
     {
	this.name = name;
	}

    getTask()
     {
		return this.task;
	}

     setTask(task)
      {
		this.task = task;
	}

    }
const todo = new Todo(1,'josue','wash');
const myTodo = [todo];
myTodo.push(1,'josue','wash');
myTodo.push(1,'josue','wash');
myTodo.push(1,'josue','wash');
myTodo.push(1,'josue','wash');
