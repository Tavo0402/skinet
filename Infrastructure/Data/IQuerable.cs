using Core.Entities;

namespace Infrastructure.Data
{
    internal interface IQuerable<T> where T : BaseEntity
    {
    }
}