import psycopg2

# Connect to the database
conn = psycopg2.connect(
    host="localhost",
    database="mydatabase",
    user="user",
    password="password"
)

# Create a cursor to execute SQL statements
cur = conn.cursor()

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
