// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Write Tests' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('can toggle a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(todoItem).not.toBeInTheDocument();
  });
});
