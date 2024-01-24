using Dapper;
using Microsoft.Data.Sqlite;
using System.Data;
using TodoApp.Repositories.Entities;

namespace TodoApp.Repositories;

public class TodoTaskRepository : ITodoTaskRepository
{
    private static readonly string ConnectionString = "Data Source=./TodoAppDb.db";

    public IList<TodoTask> GetAll()
    {
        using IDbConnection conn = new SqliteConnection(ConnectionString);
        return conn.Query<TodoTask>("SELECT Id, Description, IsDone FROM TodoTask;").ToList();
    }

    public TodoTask Insert(string description)
    {
        using IDbConnection conn = new SqliteConnection(ConnectionString);
        return conn.QuerySingle<TodoTask>(@"
            INSERT INTO TodoTask (Description) VALUES (@description)
            RETURNING Id, Description, IsDone;
        ", new { description });
    }

    public void Update(int id, string description, bool isDone)
    {
        using IDbConnection conn = new SqliteConnection(ConnectionString);
        conn.Execute(@"
            UPDATE TodoTask SET Description = @description, IsDone = @isDone WHERE Id = @id;
        ", new { id, description, isDone });
    }

    public void Delete(int id)
    {
        using IDbConnection conn = new SqliteConnection(ConnectionString);
        conn.Execute("DELETE FROM TodoTask WHERE Id = @id;", new { id });
    }
}
