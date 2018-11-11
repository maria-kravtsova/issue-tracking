class ProjectsController < ApplicationController
  def new
    params.require(:name)
    @project = Project.new({name: params[:name]})
    puts "======> #{params}"
    if @project.save
      puts "You did it!"
    else
      puts "SOMETHING WENT WRONG"
    end
  end

  def all
  end
end
