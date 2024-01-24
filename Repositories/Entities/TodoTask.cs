namespace TodoApp.Repositories.Entities;

public class TodoTask
{
    public int Id { get; set; }
    public string Description { get; set; }
    public bool IsDone { get; set; }
}
