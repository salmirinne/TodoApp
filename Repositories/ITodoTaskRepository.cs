using TodoApp.Repositories.Entities;

namespace TodoApp.Repositories;

public interface ITodoTaskRepository
{
    IList<TodoTask> GetAll();
    TodoTask Insert(string description);
    void Update(int id, string description, bool isDone);
    void Delete(int id);
}
