class PrototypesController < ApplicationController
  before_action :set_prototype, only: :show

  def index
    @prototypes = Prototype.all
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      redirect_to ({ action: new }), alert: 'YNew prototype was unsuccessfully created'
    end
  end

  def destroy
    prototype = Prototype.find(params[:id])
    # if @prototype.user_id == current_user.id
    prototype.destroy
    # end
  end

  def show
  end

  def edit
    @prototype = Prototype.find(params[:id])
    # @main = @prototype.captured_images.where(status: 0)
    @sub = @prototype.captured_images.where(status: 1)
    # @sub.captured_images.build
  end

  def update
    @prototype = Prototype.find(params[:id])
    # @prototype.update(prototype_params)
    # @prototype = prototype
    if @prototype.update(update_params)
      redirect_to action: 'index'
    else
      rendr :edit
    end
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :id,
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:content, :status]
    )
  end

  def update_params
    params.require(:prototype).permit(
      :id,
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:content, :status, :id]
      )
  end
end
