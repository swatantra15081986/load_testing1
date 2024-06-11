import pandas as pd

# Specify the input and output file paths
input_file = 'acs-2/outbound/outbound_result.csv'
output_file = 'acs-2/outbound/converted_results.csv'

# Read the CSV file into a DataFrame
df = pd.read_csv(input_file)

# Convert epoch time to human-readable format in UTC
df['timeStamp'] = pd.to_datetime(df['timeStamp'], unit='ms', utc=True)

# Optionally, convert to a specific timezone, e.g., local timezone
df['timeStamp'] = df['timeStamp'].dt.tz_convert('Asia/Kolkata')

# Print the first few rows to verify the conversion
print(df.head())

# Save the DataFrame back to a new CSV file
df.to_csv(output_file, index=False)

print(f'Converted results saved to {output_file}')
