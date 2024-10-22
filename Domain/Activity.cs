namespace Domain
{
    // This is an entity - something we use & store in a DB. Each property is a column in the DB table
    public class Activity
    {
        public Guid Id { get; set; } // entity framework will recognize this as the primary key in DB table
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }
}