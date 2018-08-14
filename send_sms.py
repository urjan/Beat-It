from twilio.rest import Client

account = "XXX"
token = "XXX"
client = Client(account, token)

message = client.messages.create(to="+XXX", from_="+XXX",
                                 body="Hey Urja! I have some heart issue... I need help ASAP!!")
