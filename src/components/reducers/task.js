export const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case 'CREATE_TASK': {
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        listId: action.payload.listId, 
        tasks: [] 
      };
      return [...tasks, newTask];
    }
    case 'UPDATE_TASK_NAME': {
      const updatedTasks= tasks.map((item)=> { if (item.id===action.payload.id) {
        return {
          ...item,
          title: action.payload.title,
        }
      }
      return item
    })
    return updatedTasks

    }
    case 'CHANGE_LIST_ID_OF_A_TASK': {
      const updatedTasks= tasks.map((item) =>
        { if (item.id===action.payload.id) {
          return {
            ...item,
            listId: action.payload.listId,
          }
        }
        return item
      })
      return updatedTasks;
      
    }
    case 'CHANGE_BOARD_ID_OF_A_TASK': {
      const updatedTasks= tasks.map((item) =>
        { if (item.id===action.payload.id) {
          return {
            ...item,
            boardId: action.payload.boardId,
          }
        }
        return item
      })
      return updatedTasks;
      
    }

    case 'REMOVE_TASK': {
      return tasks.filter((item) => item.id !== action.payload.id);
    }
  }
}

