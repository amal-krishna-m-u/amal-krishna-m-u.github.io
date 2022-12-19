import psycopg2

# Connect to the database
conn = psycopg2.connect(
    host="mydatabase-instance.cis9c214rls8.ap-south-1.rds.amazonaws.com",
    database="bda_prediction",
    user="amal123",
    password="Sinister003."
)

# Create a cursor to execute SQL statements
cur = conn.cursor()




# Define the table
table = '''
CREATE TABLE IF NOT EXISTS houses (
    name TEXT,
    rooms INTEGER,
    location TEXT,
    value REAL
)
'''

# Execute the query
cur.execute(table)

# Commit the changes
conn.commit()

# Insert the form data into the database
name = request.form['name']
rooms = request.form['rooms']
location = request.form['location']
value = request.form['value']

sql = "INSERT INTO houses (name, rooms, location, value) VALUES (%s, %s, %s, %s)"
cur.execute(sql, (name, rooms, location, value))

# Commit the changes to the database
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()
