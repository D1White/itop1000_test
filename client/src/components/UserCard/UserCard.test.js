import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserCard from "./UserCard";


describe("UserCard", () => {
    it('render', () => {
        render(<UserCard username={'username'} email={'email'} />)

        expect(screen.getByText('username')).toBeInTheDocument()
        expect(screen.getByText('email')).toBeInTheDocument()
    })
});
