// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// Exercise 1
describe('sayHello', function() {
    // Test to check if sayHello is a defined function
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });

// Exercise 2
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });

});
// Exercise 3, 4, 5

describe('sayHello', function() {
    // Existing tests...

    // Test to check if sayHello returns "Hello, Jane!" when called with "Jane"
    it('should return "Hello, Jane!" when called with "Jane"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when called with "Alex"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    // Additional tests...
    it('should return "Hello, Pat!" when called with "Pat"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

