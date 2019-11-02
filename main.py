import uuid
import pymongo

def missing(msg):
	print("missing {0}".format(msg))
	exit()

def getId():
	return uuid.uuid4().hex

def register(username, password):
	id = getId()
	missing("check database for existing username")
	missing("database add username password and id")
	return id

def login(username, password):
	missing("check db for matching username password pair")
	id = 7
	return id

def getUserData(id):
	missing("query db for user data")
	return None

def setUserData(id, userData):
	missing("for each key in userData, update db")

def getUserData(id):
	userData = {}
	missing("for each field in db, update userData")
	return userData

def listFood(userId, foodData):
	# data: name, price, description, amount
	foodId = getId()
	missing("add food to db")
	return foodId

def requestFood(userId, foodId):
	cookUserId = missing("get cook user id from foodId")
	# check if the food is full, if so, return error "full"
	missing("add userId to list of people requesting the food")
	# notify frontend that data changed

def main():
	register("", "")

if __name__ == '__main__':
	main()