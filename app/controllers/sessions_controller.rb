class SessionsController < ApplicationController
    before_action :login_redirect, only: [:new, :create]
    def new
    end
    def create
        user = User.find_by(username: params[:sessions][:username])
        if user && user.authenticate(params[:sessions][:password])
            session[:user_id] = user.id
            flash[:notice] = "You have successfully authenticated"
            redirect_to root_url
        else 
            flash.now[:alert] = "Something went wrong with your credentials"
            render "new"
        end
    end
    def destroy
        session[:user_id]= nil
        flash[:notice] = "You have successfully logged out"
        redirect_to login_url
    end

    private

    def login_redirect
        if logged_in
            flash[:alert] = "You are already logged in"
            redirect_to root_path
        end
    end
end