using Microsoft.AspNetCore.Mvc;
using TodoApp.Repositories;
using TodoApp.Repositories.Entities;

namespace TodoApp.Controllers;

[ApiController]
[Route("[controller]")]
public class TodoTaskController : ControllerBase
{
    private readonly ITodoTaskRepository _repository;

    public TodoTaskController(ITodoTaskRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IEnumerable<TodoTask> GetAll()
    {
        return _repository.GetAll();
    }

    [HttpPost]
    public TodoTask Insert(TodoTaskCreationRequest request)
    {
        return _repository.Insert(request.Description);
    }

    [HttpPut]
    [Route("{id}")]
    public void Update(int id, TodoTaskUpdateRequest request)
    {
        _repository.Update(id, request.Description, request.IsDone);
    }

    [HttpDelete]
    [Route("{id}")]
    public void Delete(int id)
    {
        _repository.Delete(id);
    }

    public class TodoTaskCreationRequest
    {
        public TodoTaskCreationRequest(string description)
        {
            Description = description;
        }

        public string Description { get; }
    }

    public class TodoTaskUpdateRequest
    {
        public TodoTaskUpdateRequest(string description, bool isDone)
        {
            Description = description;
            IsDone = isDone;
        }

        public string Description { get; }
        public bool IsDone { get; }
    }
}
