import subprocess

# Set the connection parameters
host = "mydatabase-instance.cis9c214rls8.ap-south-1.rds.amazonaws.com"
database = "bda_prediction"
user = "amal123"
password = "Sinister003."

# Build the Sqoop command
command = f"sqoop import --connect jdbc:postgresql://{mydatabase-instance.cis9c214rls8.ap-south-1.rds.amazonaws.com}/{bda_prediction} --username {amal123} --password {Sinister003.} --table houses --target-dir /user/hadoop/houses"

# Execute the Sqoop command
subprocess.run(command.split())
